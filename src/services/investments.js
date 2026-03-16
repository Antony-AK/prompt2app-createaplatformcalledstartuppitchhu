import { supabase } from '../lib/supabase';

export async function getInvestments() {
  const { data, error } = await supabase.from('investments').select('*');
  if (error) {
    console.error('Error fetching investments:', error);
    return null;
  }
  return data;
}

export async function createInvestment(investment) {
  if (!investment.idea_id || !investment.investor_id || !investment.amount) {
    throw new Error('Invalid investment data');
  }
  const { data, error } = await supabase.from('investments').insert([investment]);
  if (error) {
    console.error('Error creating investment:', error);
    return { data: null, error };
  }
  return { data, error };
}

export async function deleteInvestment(id) {
  const { data, error } = await supabase.from('investments').delete().eq('id', id);
  if (error) {
    console.error('Error deleting investment:', error);
    return { data: null, error };
  }
  return { data, error };
}