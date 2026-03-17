import Link from 'next/link'
import Image from 'next/image'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <Link href="/">
          <Image src="/openrun_logo.svg" alt="Open Run" width={140} height={36} className="mx-auto mb-8" />
        </Link>
        <div className="text-6xl mb-6">&#10003;</div>
        <h1 className="text-3xl font-bold mb-4">You&apos;re Registered!</h1>
        <p className="text-muted mb-8">
          Welcome to Open Run Agentic Pay. We&apos;ll send event details and resources to your email shortly.
        </p>
        <Link href="/" className="px-6 py-3 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
