import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";
import { BrowserRouter } from 'react-router-dom';

beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
    };
  }
});

describe('ReservationForm', () => {
    test('Renders the ReservationForm heading', () => {
      try{
        render(
          <BrowserRouter>
            <ReservationForm />
          </BrowserRouter>
        );
      }
      catch (e) {
        console.error("Error rendering ReservationForm:", e);
        throw e;
      }
        const headingElement = screen.getByText('Reserve a Table');
        expect(headingElement).toBeInTheDocument();
    });
  });