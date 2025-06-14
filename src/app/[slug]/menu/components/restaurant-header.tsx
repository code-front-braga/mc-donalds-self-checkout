'use client';

import { Restaurant } from 'generated/prisma';
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/ui/button';

interface RestaurantHeaderProps {
	restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
	const { back } = useRouter();

	const handleBackClick = () => back();

	return (
		<div className="relative h-[250px] w-full">
			<Button
				variant="secondary"
				size="icon"
				onClick={handleBackClick}
				className="absolute top-4 left-4 z-50 rounded-full"
			>
				<ChevronLeftIcon />
			</Button>
			<Image
				src={restaurant.coverImageUrl}
				alt={restaurant.name}
				fill
				className="object-cover"
			/>
			<Button
				variant="secondary"
				size="icon"
				className="absolute top-4 right-4 z-50 rounded-full"
			>
				<ScrollTextIcon />
			</Button>
		</div>
	);
};

export default RestaurantHeader;
