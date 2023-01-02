import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3 (short for (Generative Pre-trained Transformer 3)) is a state-of-the-art language generation model developed by OpenAI. It has the ability to generate human-like text and can be fine-tuned for a variety of language tasks such as translation, summarization, and question answering. It is one of the largest and most powerful language models currently available, with over 175 billion parameters."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate conversation with human users, especially over the Internet. They can be used in a variety of applications such as customer service, marketing, and entertainment. "/>
        <Feature title="Knowledgebase" text="A knowledge base is a collection of information that is organized and easy to access. It is often used as a resource for customer support, to help users find answers to common questions and troubleshoot problems. A knowledge base can be in the form of a FAQ (frequently asked questions) page on a website, a searchable database, or a set of documents or articles." />
        <Feature title="Education" text="Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes place under the guidance of educators, but learners may also educate themselves. "/>
      </div>
    </div>
  )
}

export default WhatGPT3