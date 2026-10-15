# Daymark public beta — deployment guide

## Before launch
1. Create a feedback form (Google Forms or Tally). Ask: Would you use Daymark? What worked? What was confusing? What should we improve? Do not require real names or diary contents.
2. Set environment variable `VITE_FEEDBACK_URL` to the full form URL in Netlify Site configuration > Environment variables. Redeploy afterward.
3. Test locally: `npm install && npm run build && npm run dev`.
4. Push the `daymark-app` directory contents to a GitHub repository.
5. In Netlify choose Add new project > Import an existing project > GitHub. Build command: `npm run build`; publish directory: `dist`. Deploy and use the generated https URL.
6. Test on iPhone and Android and in an incognito window.

## What beta visitors should know
- Private journal data stays in their own browser localStorage. Clearing browser data loses entries. No cross-device syncing.
- Community Universe is a LOCAL PROTOTYPE: posts are not shared across users, despite the star UI. Do not describe it as a functioning public community.
- Browser speech recognition may be unavailable; emoji suggestions are rule-based, not a connected AI model.
- The daily community post limit is local only and can be bypassed; it is not account-enforced.
- Do not invite users to enter highly sensitive diary information in an early beta.

## Production community requirements
Add Supabase Auth and a server-side database with row-level security; separate public posts from private journal entries; enforce one post per user per local calendar day server-side; anonymous public display with no exposed user IDs; deletion and reporting; moderation and abuse controls; privacy policy and retention plan. Test security before opening shared posts to the public.

## Reddit beta post (edit after deployment)
**Title:** We built Daymark, a three-emoji diary — could you test our free beta?

Hi! We're a student team building Daymark, a gentle way to remember your day using three emojis and an optional diary note. Your monthly emoji choices become a personal constellation.

We just launched a browser-based beta and would love honest feedback about the experience, especially what feels intuitive and what doesn't.

Try it: [INSERT YOUR LIVE NETLIFY URL]
Feedback form: [INSERT YOUR FORM URL]

Note: Entries currently stay in your browser, and the anonymous Community Universe is a local preview, not yet shared across visitors. Please don't enter sensitive personal details.

What would make you want to return to an app like this?

(Please check each subreddit's self-promotion and feedback rules before posting.)
