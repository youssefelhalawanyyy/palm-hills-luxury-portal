-- Palm Hills PostgreSQL Schema with RLS
CREATE TABLE IF NOT EXISTS public.client_properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_name TEXT NOT NULL,
  unit_code TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  price_egp NUMERIC(14, 2) NOT NULL,
  specs TEXT NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.client_properties ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view available properties" ON public.client_properties FOR SELECT USING (is_available = TRUE);
