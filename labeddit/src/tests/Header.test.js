import { render, screen} from "@testing-library/react"
import Header from "../components/Header"

describe("Page", () => {
    test("deve renderizar com o título", () => {
				// renderiza o componente
        render(<Header />)

        screen.logTestingPlaygroundURL()
    })
})