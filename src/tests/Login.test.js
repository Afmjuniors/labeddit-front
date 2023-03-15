import { render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import HomePage from "../pages/HomePage"
import axios from "axios"


const url = "http://urlMock-base.com"
jest.mock(url)

// Define a mock context object with the `isLogged` property


describe("Homepage", () => {
  test("deve renderizar com o título", () => {
    useNavigate.mockReturnValue(jest.fn())
    useLocation.mockReturnValue("/")
    useParams.mockReturnValue({id:undefined})

    axios.get(url).mockReturnValue()

    render(
        <HomePage />
    )

    screen.logTestingPlaygroundURL()
  })
})