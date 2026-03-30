-- Generated pages table
create table if not exists public.generated_pages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trade text not null,
  city text not null,
  state text not null,
  business_name text not null,
  phone text not null,
  slug text not null,
  seo_content jsonb,
  is_published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Indexes (idempotent)
create unique index if not exists idx_generated_pages_slug on public.generated_pages(slug);
create index if not exists idx_generated_pages_user_id on public.generated_pages(user_id);

-- Enable RLS (idempotent — no error if already enabled)
alter table public.generated_pages enable row level security;

-- Policies (idempotent using DO blocks)
do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'generated_pages' and policyname = 'Users can view own pages') then
    create policy "Users can view own pages"
      on public.generated_pages for select
      using (auth.uid() = user_id);
  end if;
end $$;

do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'generated_pages' and policyname = 'Users can insert own pages') then
    create policy "Users can insert own pages"
      on public.generated_pages for insert
      with check (auth.uid() = user_id);
  end if;
end $$;

do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'generated_pages' and policyname = 'Users can update own pages') then
    create policy "Users can update own pages"
      on public.generated_pages for update
      using (auth.uid() = user_id);
  end if;
end $$;

do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'generated_pages' and policyname = 'Users can delete own pages') then
    create policy "Users can delete own pages"
      on public.generated_pages for delete
      using (auth.uid() = user_id);
  end if;
end $$;

do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'generated_pages' and policyname = 'Anyone can view published pages') then
    create policy "Anyone can view published pages"
      on public.generated_pages for select
      using (is_published = true);
  end if;
end $$;

-- Auto-update updated_at (idempotent)
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists on_generated_pages_updated on public.generated_pages;
create trigger on_generated_pages_updated
  before update on public.generated_pages
  for each row execute function public.handle_updated_at();
