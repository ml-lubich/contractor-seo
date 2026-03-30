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

-- Index for fast lookups
create unique index if not exists idx_generated_pages_slug on public.generated_pages(slug);
create index if not exists idx_generated_pages_user_id on public.generated_pages(user_id);

-- Enable RLS
alter table public.generated_pages enable row level security;

-- Users can only see their own pages
create policy "Users can view own pages"
  on public.generated_pages for select
  using (auth.uid() = user_id);

-- Users can insert their own pages
create policy "Users can insert own pages"
  on public.generated_pages for insert
  with check (auth.uid() = user_id);

-- Users can update their own pages
create policy "Users can update own pages"
  on public.generated_pages for update
  using (auth.uid() = user_id);

-- Users can delete their own pages
create policy "Users can delete own pages"
  on public.generated_pages for delete
  using (auth.uid() = user_id);

-- Anyone can view published pages (for public preview)
create policy "Anyone can view published pages"
  on public.generated_pages for select
  using (is_published = true);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_generated_pages_updated
  before update on public.generated_pages
  for each row execute function public.handle_updated_at();
