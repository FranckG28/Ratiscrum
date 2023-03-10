import julienVDMAvatar from "@/assets/avatar/julienVDM.jpg";
import { Member } from "@/models/member";

export const julienVDM: Member = {
    name: "Julien Von Der Mark",
    role: "Back end",
    avatar: julienVDMAvatar,
    links: [
        {
            name: "GitHub",
            icon: "github",
            url: "https://github.com/jvondermarck",
        },
        {
            name: "Linkedin",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/julien-von-der-marck/",
        },
    ],
}