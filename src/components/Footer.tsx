import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
	return (
		<div className=" relative mt-4 w-full h-50 grid grid-rows-3 grid-cols-1 bg-[#1A5534]">
			<div className="relative w-full h-full row-span-2 flex flex-col items-center justify-center text-lg text-white">
				<h1>
					Alguma duvida?{" "}
					<Link
						href={"/"}
						className="hover:underline transition-all duration-500"
					>
						{" "}
						Entre em Contato
					</Link>
				</h1>
				<ul className="flex items-center space-x-8 mt-4">
					<li>
						<Link href={"/"}>
							<FaInstagram
								size={24}
								className="transition-all duration-200 hover:scale-120"
							/>
						</Link>
					</li>
					<li>
						<Link href={"/"}>
							<FaFacebook
								size={24}
								className="transition-all duration-200 hover:scale-120"
							/>
						</Link>
					</li>
					<li>
						<Link href={"/"}>
							<FaWhatsapp
								size={24}
								className="transition-all duration-200 hover:scale-120"
							/>
						</Link>
					</li>
				</ul>
				<span className="text-xs text-[#ffffffaf] mt-6">
					Codigo e Design por Erick Nunes ©2025 - Todos Direitos
					Reservados
				</span>
			</div>

			<ul className="relative w-full h-full grid grid-cols-3 text-md text-white border-t-[1px] border-neutral-100">
				<li className="flex w-full h-full items-center justify-center border-r-[1px] border-neutral-100">
					<Link
						href={"/"}
						className="hover:underline transition-all duration-500 w-full h-full flex items-center justify-center"
					>
						Inicio
					</Link>
				</li>
				<li className="flex w-full h-full items-center justify-center border-r-[1px] border-neutral-100">
					<Link
						href={"/products"}
						className="hover:underline transition-all duration-500 w-full h-full flex items-center justify-center"
					>
						Vasos
					</Link>
				</li>
				<li className="flex w-full h-full items-center justify-center ">
					<Link
						href={"/legal"}
						className="hover:underline transition-all duration-500 w-full h-full flex items-center justify-center"
					>
						Legal
					</Link>
				</li>
			</ul>
		</div>
	);
}
