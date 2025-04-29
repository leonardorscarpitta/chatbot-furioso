export default function SocialIcons() {
  const defaultImgSize = 55;
  
  return (
    <div className="flex items-center gap-x-2">
      <SocialMedia href="instagram.com" name="instagram" src="https://img.icons8.com/3d-fluency/94/instagram-new.png" />
      <SocialMedia href="youtube.com" name="youtube" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" />
      <SocialMedia href="twitch.tv" name="twitch" src="https://img.icons8.com/3d-fluency/94/twitch.png" />
      <SocialMedia href="https://x.com/furia" name="https://img.icons8.com/color/48/twitterx--v1.png" src="https://img.icons8.com/color/48/twitterx--v1.png" />
    </div>
  )
}