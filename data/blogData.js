// app/blog/blogData.js
import React from 'react'

export const POST_CONTENT = {
  // --- BLOG 1: HOSTING LLMS ---
  "hosting-llms-huggingface-spaces": {
    title: "Hosting LLMs using HuggingFace Spaces",
    date: "Jan 25, 2026",
    readTime: "6 min read",
    author: "Prajwal",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Deploying Large Language Models doesn't have to be expensive. Learn how to host your own models for free using HuggingFace Spaces and Streamlit.",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          Large language models (LLMs) are transforming tasks like natural language processing and computer vision, but deploying them often feels like it requires a PhD in DevOps and a massive AWS budget. It doesn't have to.
        </p>
        
        <h2>The Challenge of Deployment</h2>
        <p>
          Running a model like Llama-2 or Falcon locally is great for testing, but sharing it with stakeholders or the world is tricky. You need a GPU, an API, a frontend, and a way to tunnel traffic.
        </p>
        <p>
          Enter <strong>HuggingFace Spaces</strong>. It allows you to host ML demo apps directly on your profile. The best part? The base tier is completely free, and it supports Streamlit, Gradio, and Docker out of the box.
        </p>

        <hr className="my-8 border-slate-200 dark:border-slate-800" />

        <h2>Step 1: Create a New Space</h2>
        <p>
          First, head over to <a href="https://huggingface.co/spaces" className="text-blue-500 hover:underline">huggingface.co/spaces</a> and click "Create new Space".
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Space Name:</strong> Choose something catchy (e.g., <code>my-awesome-llm</code>).</li>
            <li><strong>License:</strong> MIT or Apache 2.0 is usually safe.</li>
            <li><strong>SDK:</strong> Select <strong>Streamlit</strong> (it's great for custom UIs).</li>
            <li><strong>Hardware:</strong> Select "Free" (CPU Basic). If you need GPU inference, you can upgrade later.</li>
        </ul>

        <h2>Step 2: The Code</h2>
        <p>
          Once your space is created, clone it locally. We will need a <code>requirements.txt</code> file to install dependencies.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
            <code>
                transformers<br/>
                torch<br/>
                streamlit<br/>
                accelerate
            </code>
        </div>

        <p>
            Now, create an <code>app.py</code> file. This is where the magic happens. We will use the <code>transformers</code> pipeline to load a small model (like <code>google/flan-t5-small</code>) that can run on a CPU.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`import streamlit as st
from transformers import pipeline

# Load model
@st.cache_resource
def load_model():
    return pipeline("text2text-generation", model="google/flan-t5-small")

model = load_model()

st.title("My First LLM Space 🚀")
input_text = st.text_area("Enter your prompt:")

if st.button("Generate"):
    if input_text:
        result = model(input_text)
        st.write(result[0]['generated_text'])`}</pre>
        </div>

        <h2>Step 3: Deploy</h2>
        <p>
            Simply commit and push your code to the HuggingFace repository:
        </p>
        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
            <code>
                git add .<br/>
                git commit -m "Initial commit"<br/>
                git push
            </code>
        </div>
        <p>
            HuggingFace will automatically detect the push, build the container, install requirements, and launch your app. In about 2 minutes, your LLM will be live!
        </p>
      </>
    )
  },

 // --- BLOG 2: RAGs FROM SCRATCH ---
  "rags-from-scratch-part-1": {
    title: "Rags From Scratch — Part 1: Understanding Retrieval-Augmented Generation and Vector Databases",
    date: "Oct 24, 2024",
    readTime: "7 min read",
    author: "Prajwal",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    excerpt: "A deep dive into the architecture of RAG applications, exploring how Vector Databases bridge the gap between static LLM knowledge and real-time private data.",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          In this series, we’ll explore in-depth how RAG (Retrieval-Augmented Generation) works through simple examples, building the fundamental components from scratch. We’ll start with the core principles and how a vector database is central to this process.
        </p>
        
        <h2>What is Retrieval-Augmented Generation (RAG)?</h2>
        <p>
          RAG is a combination of two core AI concepts: <strong>retrieval</strong> and <strong>generation</strong>. At its heart, RAG uses retrieval mechanisms to fetch relevant data, followed by generation mechanisms to form a response based on the retrieved information.
        </p>
        <p>
          It’s especially useful in cases where a language model doesn’t have direct access to specialized knowledge but can retrieve that knowledge from an external source.
        </p>

        

        <h3>RAG in Simple Terms</h3>
        <p>
          Imagine having a system where instead of relying solely on a pre-trained model’s memory (like GPT-3), it first queries a <strong>knowledge base</strong> (a vector database) to fetch relevant information and then generates a coherent, informed response. This two-step process ensures that the response is both contextually relevant and enriched with external data.
        </p>

        <h3>Why RAG?</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Enhanced Accuracy:</strong> By querying external data, the system can provide up-to-date or more detailed responses.</li>
            <li><strong>Smaller Models:</strong> Instead of training massive models that store all information, RAG allows smaller models to dynamically access external sources.</li>
            <li><strong>Flexibility:</strong> You can update the knowledge base easily without retraining the whole model.</li>
        </ul>

        <hr className="my-8 border-slate-200 dark:border-slate-800" />

        <h2>Vector Database: The Core of Retrieval</h2>
        <p>
          At the heart of the retrieval process in RAG is the <strong>vector database</strong>. Unlike traditional databases that store data in rows and columns, a vector database stores numerical embeddings (vector representations) of data points.
        </p>
        <p>
          These embeddings are generated using specialized models and capture the semantic meaning of the data. For example, if you have a sentence like “I love oranges, grapes, apples and other fruits”, its embedding is a vector (a list of numbers) that represents the underlying meaning of that sentence.
        </p>

        <h3>Traditional vs. Vector Database</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Traditional Database:</strong> If you search for “AI research,” it will only return entries with those exact keywords, missing out on relevant documents like “Artificial Intelligence studies”.</li>
            <li><strong>Vector Database:</strong> With embeddings, if you search for “AI research,” the system understands that “Artificial Intelligence studies” is contextually similar, retrieving it even though the exact words don’t match.</li>
        </ul>

        

        <h2>How the Vector Database Works</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Embeddings:</strong> Convert textual data into numerical vectors using embedding models.</li>
            <li><strong>Storage:</strong> Store these vectors in a database where each vector represents a data point (e.g., a sentence).</li>
            <li><strong>Querying:</strong> When a query is made, it is also converted into a vector, and the database retrieves vectors that are closest to the query in terms of cosine similarity or another similarity metric.</li>
            <li><strong>Results:</strong> These retrieved vectors are then used by the generation model to craft a response.</li>
        </ol>

        <hr className="my-8 border-slate-200 dark:border-slate-800" />

        <h2>Building a Simple RAG</h2>
        <p>
          Let’s start by building a simple vector database and using it for retrieval. In this example, we’ll be storing sentences as vectors, and querying the database to find similar sentences.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`# Installing required libraries
pip install sentence-transformers scikit-learn`}</pre>
        </div>

        <p>
          Here is the code to implement simple retrieval using multiple similarity metrics:
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# 1. Initialize the model
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# 2. List of sentences to encode (the "database")
sentences = [
    "I love machine learning.",
    "Artificial intelligence is fascinating.",
    "Python is a great programming language.",
    "I enjoy building models with data.",
    "Natural language processing is a part of AI."
]

# 3. Convert sentences into embeddings (vectors)
sentence_embeddings = model.encode(sentences)

# 4. Function to find similar sentences
def find_similar_sentences(query, metric='cosine', top_n=3):
    query_embedding = model.encode([query])
    
    if metric == 'cosine':
        similarities = cosine_similarity(query_embedding, sentence_embeddings)
    elif metric == 'dot_product':
        similarities = np.dot(query_embedding, sentence_embeddings.T)
    # ... (other metrics omitted for brevity)

    similar_indices = np.argsort(similarities[0])[::-1][:top_n]
    return [(sentences[i], similarities[0][i]) for i in similar_indices]

# Example query
query_sentence = "I like learning about AI."
similar_sentences = find_similar_sentences(query_sentence, metric='cosine', top_n=2)

print("Cosine Similarity Results:")
for sentence, score in similar_sentences:
    print(f"Sentence: {sentence}, Score: {score:.4f}")`}</pre>
        </div>

        <h3>Similarity Metrics</h3>
        <p>
          In a vector database, the similarity between vectors can be calculated using different metrics:
        </p>
        
        

        <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Cosine Similarity:</strong> Measures the cosine of the angle between two vectors.</li>
            <li><strong>Dot Product:</strong> The sum of the products of corresponding vector elements. Higher dot products indicate greater similarity.</li>
            <li><strong>Euclidean Distance:</strong> Measures the straight-line distance between two points in vector space.</li>
            <li><strong>Manhattan Distance:</strong> Measures the sum of the absolute differences between the vector components.</li>
        </ul>

        <h2><strong>Conclusion</strong></h2>
        <p>
          In this first part of the “Rags From Scratch” series, we introduced the fundamental components of Retrieval-Augmented Generation (RAG) and created a simple vector database from scratch.
        </p>
      </>
    )
  },

  // --- BLOG 3: EVALUATING WITH LANGSMITH ---
  "evaluating-llms-with-langsmith": {
    title: "Evaluating Open Source LLMs with LangSmith",
    date: "Aug 17, 2024",
    readTime: "6 min read",
    author: "Prajwal",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    excerpt: "LangSmith is a comprehensive platform designed to test, debug, and evaluate large language model (LLM) applications. Learn how to use it to monitor and improve your models.",
    content: (
      <>
        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
          LangSmith is a comprehensive platform designed to test, debug, and evaluate large language model (LLM) applications. With its robust suite of tools, LangSmith offers developers the ability to monitor and improve the performance of their LLMs efficiently.
        </p>

        <h2>Why Choose LangSmith?</h2>
        <p>LangSmith is a powerful tool for building and refining LLM applications, offering several key benefits:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Rapid Development:</strong> Quick setup and integration allow for fast prototyping and deployment.</li>
            <li><strong>Quality Assurance:</strong> Rigorous evaluation tools help prevent costly mistakes.</li>
            <li><strong>Real-Time Insights:</strong> Performance monitoring tools provide instant feedback.</li>
            <li><strong>Seamless Integration:</strong> Integrates smoothly with LangChain.</li>
        </ul>

        <hr className="my-8 border-slate-200 dark:border-slate-800" />

        <h2>Setting Up the Environment</h2>
        <p>
            First, we need to install the necessary libraries and set up our environment variables.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`pip install -q -U langsmith langchain python-dotenv langchain_community langchain-huggingface transformers==4.43.1`}</pre>
        </div>

        <p>
            Next, set up your API keys. You can get your LangSmith API key from the platform settings.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`import os
from dotenv import load_dotenv

load_dotenv()

os.environ["LANGCHAIN_API_KEY"] = "your_api_key"
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_ENDPOINT"] = "https://api.smith.langchain.com"`}</pre>
        </div>

        <h2>Creating a Project</h2>
        <p>
            Managing projects in LangSmith is easy with the Python SDK. Here is how you can create a new project programmatically:
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`from langsmith import Client
import uuid

client = Client()

uid = uuid.uuid4()
PROJECT_NAME = "Code Buddy" + str(uid)

session = client.create_project(
    project_name=PROJECT_NAME,
    description="A project that helps with Python code",
)

os.environ["LANGCHAIN_PROJECT"] = PROJECT_NAME`}</pre>
        </div>

        <h2>Setting Up an LLM</h2>
        <p>
            We will use a HuggingFace model for this example. LangSmith supports various models through LangChain.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`from langchain_community.llms import HuggingFaceEndpoint
from langchain_community.chat_models.huggingface import ChatHuggingFace

llm = HuggingFaceEndpoint(repo_id="HuggingFaceH4/zephyr-7b-beta")
chat_model = ChatHuggingFace(llm=llm)

response = chat_model.invoke("Hello, chatty, how you doin' today?")
print(response)`}</pre>
        </div>

        <h2>Creating Labeled Datasets</h2>
        <p>
            You can upload a CSV file to create a labeled dataset for evaluation.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`dataset_name = "PyTorch Code Syntax"
csv_path = "pytorch_code_syntax_flashcards.csv"
input_keys = ["front"]
output_keys = ["back"]

csv_dataset = client.upload_csv(
    csv_file=csv_path,
    input_keys=input_keys,
    output_keys=output_keys,
    name=dataset_name,
    data_type="kv",
)`}</pre>
        </div>

        <h2>Evaluating Performance</h2>
        <p>
            LangSmith offers built-in evaluators like <code>conciseness</code>, <code>relevance</code>, and <code>correctness</code>. Here is how to run an evaluation on your dataset:
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`from langchain.smith import RunEvalConfig, run_on_dataset

eval_config = RunEvalConfig(
    evaluators=["conciseness", "coherence"],
    eval_llm=chat_model
)

results = run_on_dataset(
    llm_or_chain_factory=llm,
    client=client,
    dataset_name=dataset_name,
    evaluation=eval_config,
    project_name="criteria_test",
)`}</pre>
        </div>

        <h2>Custom Evaluators</h2>
        <p>
            You can also define custom criteria for your specific use case, such as checking if a response contains code.
        </p>

        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl my-6 font-mono text-sm overflow-x-auto">
<pre>{`eval_config = RunEvalConfig(
   evaluators=[
       RunEvalConfig.Criteria(
           {"has_code": "Does the question contain a code syntax?"}
       ),
       RunEvalConfig.Criteria(
           {
               "is_vague": "Is the question vague?"
           }
       ),
   ],
   eval_llm=chat_model
)`}</pre>
        </div>

        <h2>Conclusion</h2>
        <p>
            LangSmith is a powerful framework for building, testing, and deploying LLM applications. Its comprehensive tools for prompt engineering, performance monitoring, and output evaluation make it indispensable for developing high-quality LLM-based solutions.
        </p>
      </>
    )
  },

  // --- DEFAULT ---
  "default": {
    title: "Article Not Found",
    content: <p>Content coming soon...</p>
  }
}