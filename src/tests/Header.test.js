import { render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

jest.mock("react-router-dom")

// Define a mock context object with the `isLogged` property
const mockContext = {
  isLogged: true,
}

// Create a mock context provider that returns the mock context object
const MockContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={mockContext}>
      {children}
    </GlobalContext.Provider>
  )
}

describe("Header", () => {
  test("deve renderizar com o título", () => {
    useNavigate.mockReturnValue(jest.fn())
    useLocation.mockReturnValue("/")
    useParams.mockReturnValue({id:undefined})

    render(
      <MockContextProvider>
        <Header />
      </MockContextProvider>
    )

    screen.logTestingPlaygroundURL()
  })
})