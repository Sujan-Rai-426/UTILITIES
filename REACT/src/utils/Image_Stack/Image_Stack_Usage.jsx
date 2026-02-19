import React from 'react'
import Image_Stack from './Image_Stack';

const Image_Stack_Usage = () => {

    const images = [
    {
        "id": 1,
        "image": "https://media.istockphoto.com/id/104354602/photo/beautiful-parot.jpg?s=612x612&w=0&k=20&c=U3deRqTOOwHyxcJutlBvwGkIsCEJeW3va3NxFOzzvMM=",
        "updated_at": "2026-01-24T11:46:04.452733Z",
        "order": 0
    },
    {
        "id": 2,
        "image": "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_user_personalization&w=740&q=80",
        "updated_at": "2026-01-24T11:48:46.178876Z",
        "order": 1
    },
    {
        "id": 3,
        "image": "https://i.pinimg.com/474x/79/fd/4a/79fd4acf9376131cd21dae524104406d.jpg",
        "updated_at": "2026-01-24T11:48:46.178876Z",
        "order": 2
    },
    {
        "id": 4,
        "image": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2025/04/solar_orbiter_s_widest_high-res_view_of_the_sun/26672644-4-eng-GB/Solar_Orbiter_s_widest_high-res_view_of_the_Sun.jpg",
        "updated_at": "2026-01-24T11:48:46.178876Z",
        "order": 3
    }
];

    return (
        <div>
            <Image_Stack initialImages={images} interval={4000} />
        </div>
    )
}

export default Image_Stack_Usage



