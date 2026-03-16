import { supabase } from '../lib/supabase';
import { getIdeas, createIdea } from './ideas';
import { createInvestment } from './investments';
import { createComment } from './comments';

export async function seedDemoData() {
  const ideas = [
    {
      title: 'AI-Powered Farming',
      description: 'Revolutionize agriculture with AI-driven crop monitoring.',
      category: 'Agriculture',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/AI_in_Agriculture.jpg',
      user_id: '123'
    },
    {
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solutions for businesses.',
      category: 'Sustainability',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Eco-Friendly_Packaging.jpg',
      user_id: '123'
    },
    {
      title: 'Virtual Reality Education',
      description: 'Immersive VR experiences for education.',
      category: 'Education',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Virtual_Reality_Education.jpg',
      user_id: '123'
    }
  ];

  const comments = [
    {
      idea_id: '1',
      user_id: '456',
      message: 'This is a great idea!'
    },
    {
      idea_id: '2',
      user_id: '789',
      message: 'I love the sustainability focus.'
    }
  ];

  const investment = {
    idea_id: '1',
    investor_id: '456',
    amount: 5000
  };

  await Promise.all(ideas.map(createIdea));
  await Promise.all(comments.map(createComment));
  await createInvestment(investment);
}