
import Stories from "./Stories";
import Feed from "./Feed";

export default function Corpo() {
    return (
        <div className="corpo">
            <Esquerdo />
            <Sidebar />
        </div>
    );
}

function Esquerdo() {
    return (
        <div className="esquerda">
            <Stories />
            <Feed />
        </div>
    );
}

function Sidebar() {
    return (
        <div className="sidebar">
            
        </div>
    );
}