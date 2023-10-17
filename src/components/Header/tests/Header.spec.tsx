import { BrowserRouter } from "react-router-dom";
import { Header } from "../header";

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
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
    const about = screen.getByText("Sort Number Lottery");
    fireEvent.click(about);
    expect(window.location.pathname).toBe("/");
  });

  it("shoul click about navigate page", () => {
    const about = screen.getByText("About");

    fireEvent.click(about);

    expect(window.location.pathname).toBe("/about");
  });
  it("shoul click contact navigate page", () => {
    const about = screen.getByText("Contact");
    fireEvent.click(about);
    expect(window.location.pathname).toBe("/contact");
  });
});
