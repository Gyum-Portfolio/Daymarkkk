
import { useState } from 'react'
import { supabase } from './supabase'

export default function GoogleLogin() {
  const [agreed, setAgreed] = useState(false)

  const handleGoogleLogin = async () => {
    if (!agreed) return

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })

    if (error) {
      alert('Google login failed: ' + error.message)
    }
  }

  return (
    <div>
      <label
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          marginBottom: '12px',
          fontSize: '13px',
        }}
      >
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>
          I agree to the{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>.
        </span>
      </label>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={!agreed}
        style={{
          opacity: agreed ? 1 : 0.5,
          cursor: agreed ? 'pointer' : 'not-allowed',
        }}
      >
        Continue with Google
      </button>
    </div>
  )
}
