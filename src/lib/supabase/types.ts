export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

// Extend this type with the tables/views you enable in Supabase.
export type Database = Record<string, never>;
