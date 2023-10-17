import { Header } from "../header";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockLink = jest.fn();

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  });

  it("should render correctly", () => {
    expect(screen).toMatchSnapshot();
  });
  it("should render navbar correctly", () => {
    const title = screen.getByText("Sort Number Lottery");
    const about = screen.getByText("About");
    const contact = screen.getByText("Contact");

    expect(title).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it("shoul click Sort Number Lottery navigate page", () => {
    const home = screen.getByText("Sort Number Lottery");
    home.onclick = () => mockLink("/");
    fireEvent.click(home);
    expect(mockLink).toHaveBeenCalledWith("/");
  });

  it("shoul click about navigate page", () => {
    const about = screen.getByText("About");
    about.onclick = () => mockLink("/about");
    fireEvent.click(about);

    expect(mockLink).toHaveBeenCalledWith("/about");
  });
  it("shoul click contact navigate page", () => {
    const contact = screen.getByText("Contact");
    contact.onclick = () => mockLink("/contact");
    fireEvent.click(contact);
    expect(mockLink).toHaveBeenCalledWith("/contact");
  });
});
