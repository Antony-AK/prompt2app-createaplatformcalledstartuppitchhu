import { supabase } from '../lib/supabase';

export async function getComments() {
  const { data, error } = await supabase.from('comments').select('*');
  return data;
}

export async function createComment(comment) {
  const { data, error } = await supabase.from('comments').insert([comment]);
  return { data, error };
}