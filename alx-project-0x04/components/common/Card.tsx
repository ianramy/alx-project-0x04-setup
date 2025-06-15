// alx-project-0x02/components/common/Card.tsx

import { CardProps } from '../../interface';

export default function Card({ title, content }: CardProps) {
    return (
        <div className="border rounded p-4 shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
    );
}