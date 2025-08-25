"use client"
import { TeamMember } from "@/interface/team"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"




function useProgressiveImage(src: string) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    useEffect(() => {
        const img = new Image()

        img.onload = () => {
            setImageLoaded(true)
        }

        img.onerror = () => {
            setImageError(true)
        }

        img.src = src
    }, [src])

    return { imageLoaded, imageError }
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
    const [isHovered, setIsHovered] = useState(false)
    const [isOnMobile, setIsOnMobile] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)


    const { imageError } = useProgressiveImage(member.image)

    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "linkedin":
                return <Linkedin className="w-5 h-5" />
            case "github":
                return <Github className="w-5 h-5" />
            case "twitter":
                return <Twitter className="w-5 h-5" />
            case "email":
                return <Mail className="w-5 h-5" />
            default:
                return null
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
            setIsHovered(true)
            setIsOnMobile(true)
        }
    }, [])

    return (
        <div
            ref={cardRef}
            className="relative group overflow-hidden rounded-2xl aspect-[3/2] bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
            onMouseEnter={() => {
                if (!isOnMobile) setIsHovered(true)
            }}
            onMouseLeave={() => {
                if (!isOnMobile) setIsHovered(false)
            }}
        >
            <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {imageError && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-transparent rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p className="text-sm">Image unavailable</p>
                    </div>
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                <h3
                    className={`text-2xl font-bold ${imageError ? 'text-gray-700 dark:text-white' : 'text-white'} mb-1 transform transition-transform duration-300 group-hover:translate-y-[-4px]`}
                    style={{
                        textShadow: '0 1px 4px rgba(0,0,0,0.4)'
                    }}
                >
                    {member.name}
                </h3>
                <p
                    className={`${imageError ? 'text-gray-500 dark:text-white' : 'text-white/80'} text-lg mb-4 transform transition-transform duration-300 group-hover:translate-y-[-4px]`}
                    style={{
                        textShadow: '0 1px 4px rgba(0,0,0,0.4)'
                    }}
                >
                    {member.designation}
                </p>

                <div
                    className={`flex gap-3 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    {Object.entries(member.social).map(([platform, url]) => (
                        <Link
                            key={platform}
                            href={url}
                            target="_blank"
                            className="p-2 bg-black/20 dark:bg-white/20  backdrop-blur-sm rounded-full hover:dark:bg-white/30 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 border border-white/10 hover:border-white/30 cursor-pointer active:scale-95 hover:rotate-3"
                            aria-label={`Visit ${member.name}'s ${platform} profile`}
                            onClick={(e) => {
                                e.stopPropagation()
                                e.currentTarget.style.transform = "scale(0.9)"
                                setTimeout(() => {
                                    if (e.currentTarget) {
                                        e.currentTarget.style.transform = ""
                                    }
                                }, 150)
                            }}
                            style={{ pointerEvents: "auto" }}
                        >
                            {getSocialIcon(platform)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}