// API Integration Test
// This file tests the NewsAPI integration to ensure everything is working correctly

import { searchNews } from './src/utils/newsApi.js';

async function testApiIntegration() {
  console.log('🧪 Testing NewsAPI Integration...\n');
  
  try {
    // Test 1: Valid search query
    console.log('1️⃣ Testing valid search query...');
    const result = await searchNews('technology');
    
    console.log('✅ API Response received:');
    console.log(`   - Status: ${result.status}`);
    console.log(`   - Total Results: ${result.totalResults}`);
    console.log(`   - Articles returned: ${result.articles?.length || 0}`);
    
    if (result.articles && result.articles.length > 0) {
      console.log(`   - First article title: "${result.articles[0].title}"`);
      console.log(`   - First article source: ${result.articles[0].source?.name}`);
    }
    
    // Test 2: Empty query (should be validated in SearchForm)
    console.log('\n2️⃣ Testing empty query...');
    try {
      await searchNews('');
      console.log('⚠️  Empty query was processed (validation should happen in SearchForm)');
    } catch (error) {
      console.log('✅ Empty query properly rejected:', error.message);
    }
    
    console.log('\n🎉 API Integration Test Complete!');
    
  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
    
    if (error.message.includes('API key')) {
      console.log('\n💡 Setup Instructions:');
      console.log('1. Register at https://newsapi.org/register');
      console.log('2. Get your API key from the dashboard');
      console.log('3. Update .env file: VITE_NEWS_API_KEY=your-actual-key');
      console.log('4. Restart the development server');
    }
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.testApiIntegration = testApiIntegration;
}

export default testApiIntegration;