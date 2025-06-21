# DevCraft - Professional Software Development Services

A modern, responsive website for DevCraft, showcasing professional software development services including web development, mobile apps, cybersecurity, and technical consulting.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 15 and React 18
- 📱 Mobile-first responsive design
- 🎯 Smooth scrolling navigation
- 📧 Contact form with email integration (Resend)
- 🔒 TypeScript for type safety
- 🎭 Professional animations and transitions
- 📊 Client testimonials and team showcase

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Email:** Resend API
- **Deployment:** Vercel/GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/devcraft-website.git
cd devcraft-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
Create a `.env.local` file in the root directory:
\`\`\`env
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages

This project is configured for static export and can be deployed to GitHub Pages:

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. The site will be automatically deployed on every push to main

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel dashboard
3. Deploy automatically on every push

## Project Structure

\`\`\`
devcraft-website/
├── app/
│   ├── actions.ts          # Server actions for form handling
│   ├── ClientPage.tsx      # Main client component
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page
├── components/ui/          # shadcn/ui components
├── public/
│   └── images/            # Static images
├── lib/
│   └── utils.ts           # Utility functions
└── ...config files
\`\`\`

## Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your environment variables
4. Update the email addresses in `app/actions.ts`

## Customization

### Colors
Update the color scheme in `tailwind.config.js` and `app/globals.css`.

### Content
- Update team information in `ClientPage.tsx`
- Modify services in the `services` array
- Update contact information and testimonials

### Images
Replace images in the `public/images/` directory with your own.

## License

This project is licensed under the MIT License.

## Support

For support, email abde51654@gmail.com or create an issue in this repository.
