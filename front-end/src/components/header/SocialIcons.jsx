import SocialMedia from "./SocialMedia";

export default function SocialIcons() {  
  return (
    <div className="flex items-center gap-x-2">
      <SocialMedia href="https://www.instagram.com/furiagg/" name="instagram" src="https://img.icons8.com/3d-fluency/256/instagram-new.png" />
      <SocialMedia href="https://www.youtube.com/@FURIAggCS" name="youtube" src="https://img.icons8.com/3d-fluency/256/youtube-play.png" />
      <SocialMedia href="https://www.twitch.tv/furiatv" name="twitch" src="https://img.icons8.com/3d-fluency/256/twitch.png" />
      <SocialMedia href="https://x.com/furia" name="https://img.icons8.com/color/256/twitterx--v1.png" src="https://img.icons8.com/color/48/twitterx--v1.png" />
    </div>
  )
}