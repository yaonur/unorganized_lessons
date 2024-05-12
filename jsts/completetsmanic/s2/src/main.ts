type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string;
};

type Reserve = {
    (
        departureDate: Date,
        returnDate: Date,
        departingFrom: string,
        destination: string,
    ): Reservation | never;
    (
        departureDate: Date,
        departingFrom: string,
        destination: string,
    ): Reservation | never;
};

const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDepartingFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string,
): Reservation => {
  if(returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination,
    };
  } else if(typeof returnDateOrDepartingFrom ==='string') {
    return {
      departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  } else {
    throw new Error('Invalid arguments');
  }
};
