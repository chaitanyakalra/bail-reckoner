require('dotenv').config();
import axios from 'axios';
import _ from 'lodash';
import * as chat from '@botpress/chat';

const apiUrl = `https://chat.botpress.cloud/${process.env.REACT_APP_WEBHOOK_ID}`;

export const initializeBotpressClient = async () => {
  if (!apiUrl) {
    throw new Error('WEBHOOK_ID is required');
  }

  // Connect and create a user
  const client = await chat.Client.connect({ apiUrl });

  // Create a conversation
  const { conversation } = await client.createConversation({});

  return { client, conversation };
};

// POST request to send a message to the bot
export const sendMessageToBot = async (client, conversation, text) => {
  try {
    await axios.post(`${apiUrl}/conversations/${conversation.id}/messages`, {
      conversationId: conversation.id,
      payload: {
        type: 'text',
        text: text,
      },
    });

    // Wait for the bot's response
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // GET request to list messages in a conversation
    const response = await axios.get(`${apiUrl}/conversations/${conversation.id}/messages`);
    const sortedMessages = _.sortBy(response.data.messages, (m) => new Date(m.createdAt).getTime());

    return sortedMessages;
  } catch (error) {
    console.error('Error communicating with Botpress:', error);
    throw error;
  }
};
