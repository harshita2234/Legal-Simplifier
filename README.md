# Legal Document Simplifier
This project is a Legal Document Simplifier built using Node.js and the Groq API, designed to assist users in processing legal documents with AI-based features. The application provides several key functionalities to help users understand and simplify complex legal texts:

1. Document Simplification: Simplifies legal language into more comprehensible, everyday language.
2. Tone Analysis and Suggestions: Analyzes the tone of legal documents and provides suggestions for improving clarity and professionalism.
3. Legal Terminology Explanation: Explaining complex legal terms makes it easier for non-experts to understand.

The project also features a dark mode user interface for better readability and comfort during extended use. Each core function is integrated with buttons that allow users to perform specific actions like simplifying text or analyzing tone.

This tool allows legal professionals, students, or anyone working with legal documents to simplify and analyze texts, making legal information more accessible.

To run the **Legal Document Simplifier** project, follow these steps:

### Prerequisites:
- **Node.js** installed on your system.
- **npm** (Node Package Manager), which comes with Node.js.
- A **Groq API key**.

### Steps:

1. **Clone the project**:
   If you haven't cloned the project from a Git repository, clone it using:
   ```bash
   git clone https://github.com/harshita2234/Legal-Simplifier
   ```
   Navigate to the project directory:
   ```bash
   cd Legal-Simplifier
   ```

2. **Install dependencies**:
   In the project folder, run:
   ```bash
   npm install
   ```
   This installs all the necessary dependencies, including **Express** and **Groq SDK**.

3. **Add your GROQ API KEY to index.js**

4. **Run the server**:
   To start the Node.js server, run:
   ```bash
   npm start
   ```
   This starts the server on `http://localhost:3000`.

5. **Open the frontend**:
   Open the `index.html` file in a browser to use the app. You can do this by either:
   - Directly opening the `index.html` file from your file explorer, or
   - Serving it using a local server like **Live Server** in VSCode.

### Testing Features:
- Paste a legal document into the textarea.
- Click the **Simplify**, **Tone Analysis**, or **Legal Terminology** buttons to trigger the corresponding AI functionalities.

Let me know if you need further assistance!
