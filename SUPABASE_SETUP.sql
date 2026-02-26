-- Coach Al Landing Page - Supabase Setup
-- Run this in the Supabase SQL Editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Add comment to table
COMMENT ON TABLE waitlist IS 'Email addresses for Coach Al early access waitlist';

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow service role insert" ON waitlist;
DROP POLICY IF EXISTS "Allow service role select" ON waitlist;

-- Create policy to allow inserts from API (service role)
CREATE POLICY "Allow service role insert" ON waitlist
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create policy to allow service role to read (for duplicate check)
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);

-- Verify setup
SELECT 
  tablename, 
  schemaname 
FROM pg_tables 
WHERE tablename = 'waitlist';

-- Show initial count (should be 0)
SELECT COUNT(*) as total_subscribers FROM waitlist;
