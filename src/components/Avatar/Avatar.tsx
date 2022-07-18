import React, { useCallback } from "react";
import { useState } from "react";
import './avatar.css';


interface AvatarProps {
    size?: 'small' | 'normal' | 'big' | 'omg';
    format?: 'square' | 'round';
    name?: string;
    src?: string;
}

const initials = (fullName: string | undefined): string | undefined => {
    if (!fullName) return;

    const sliceName = fullName.trim().toUpperCase().split(" ");
    const firstName = sliceName[0];
    const lastName = sliceName[sliceName.length - 1];

    if (firstName === lastName) {
        return `${firstName[0]}.`;
    }
    return `${firstName[0]}${lastName[0]}`;
}


export const Avatar: React.FC<AvatarProps> = ({
    name,
    src,
    format = "square",
    size,
}) => {
    const [hasNoImg, setHasNoImg] = useState(false);
    const onerror = useCallback(() => setHasNoImg(true), []);
    const noImg = !src || hasNoImg;

    if (noImg && initials) {
        return (
            <div className={`avatar ${size} ${format}`}>
                <p>{initials(name)}</p>
            </div>
        );
    }
    return (
        <div className={`avatar ${size} ${format}`}>
            <img
                className={`avatar ${size} ${format}`}
                src={src}
                onError={onerror}
            />
        </div>
    );
}

