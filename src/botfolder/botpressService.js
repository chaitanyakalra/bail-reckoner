const axios = require('axios');
const _ = require('lodash');
const chat = require('@botpress/chat');
require('dotenv').config();
const apiUrl = `https://chat.botpress.cloud/c56cf2c9-5072-4602-8455-82a64d69600a`;
console.log(apiUrl);

const initializeBotpressClient = async () => {
  if (!apiUrl) {
    throw new Error('WEBHOOK_ID is required');
  }

  const client = await chat.Client.connect({ apiUrl });
  const { conversation } = await client.createConversation({});
  
  return { client, conversation };
};

const sendMessageToBot = async (client, conversation, text, messageId) => {
  try {
    const response = await axios.post(`${apiUrl}/conversations/${conversation.id}/messages`, {
      conversationId: conversation.id,
      payload: {
        type: 'text',
        text,
        messageId  // Include messageId if required
      },
    });5

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const messagesResponse = await axios.get(`${apiUrl}/conversations/${conversation.id}/messages`);
    const sortedMessages = _.sortBy(messagesResponse.data.messages, (m) => new Date(m.createdAt).getTime());

    return sortedMessages;
  } catch (error) {
    console.error('Error communicating with Botpress:', error);
    throw error;
  }
};

