import { supabase } from '../lib/supabase';

export async function getIdeas() {
  const { data, error } = await supabase.from('ideas').select('*');
  return data;
}

export async function createIdea(idea) {
  const { data, error } = await supabase.from('ideas').insert([idea]);
  return { data, error };
}

export async function deleteIdea(id) {
  const { data, error } = await supabase.from('ideas').delete().eq('id', id);
  return { data, error };
}