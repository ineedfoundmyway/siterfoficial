CREATE TABLE public.contact_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  terms_accepted boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_requests TO anon;
GRANT INSERT, SELECT ON public.contact_requests TO authenticated;
GRANT ALL ON public.contact_requests TO service_role;

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
ON public.contact_requests FOR INSERT TO anon, authenticated
WITH CHECK (terms_accepted = true AND length(name) > 0 AND length(email) > 0 AND length(message) > 0);