 
import './likedContainer.scss';
import LikedSongs from "../../components/likedSongs/likedSongs";

type TLiked = {
    name: string,
    picture: string,
    authorName: string,
    preview: string | null,
  }

  
type TProps = {
    liked: TLiked[];
    playMusic: (previewUrl: string | null) => void;
    isPlaying: boolean;
    deleteLiked: (previewUrl: string | null) => void;
}

const LikedContainer = (props: TProps) => {
    return (
        <div className="likedContainer">
            <div className="likedContent">
                <LikedSongs deleteLiked={props.deleteLiked} isPlaying={props.isPlaying} liked={props.liked} playMusic={props.playMusic}/>
            </div>
        </div>
    )
}

export default LikedContainer;