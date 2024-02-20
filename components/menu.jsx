import Link from "next/link"

const Menu = ({ ModalIsOpen }) => {
  return (
      <div className={`hidden max-sm:flex absolute w-full justify-center items-center pb-10 bg-[#fff] h-screen top-10 transition-all ${ModalIsOpen ? 'left-[0px]' : 'left-[-600px]'}`}>
        <div className="flex flex-col items-center">
          <nav>
            <ul className="flex flex-col items-center gap-5 mb-5">
              <li>
                <Link href={"Biz haqimizda"}>Biz haqimizda</Link>
              </li>
              <li>
                <Link href={"Hamkorlarimiz"}>Hamkorlarimiz</Link>
              </li>
              <li>
                <Link href={"Xizmatlar"}>Xizmatlar</Link>
              </li>
            </ul>
          </nav>
          <button className="hover:bg-[#1A906B] w-[167px] hover:text-[#fff] transition-all bg-[#cdfced] p-3 rounded-xl">
            <span>+998 (99) 200 33 00</span>
          </button>
        </div>
      </div>
  )
}

export default Menu