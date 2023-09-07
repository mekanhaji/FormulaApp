const data = [
  {
    name: "Pythagorean Theorem",
    description: "Calculates the length of the hypotenuse in a right triangle.",
    formula: "c² = a² + b²",
    example:
      "For a right triangle with legs a = 3 and b = 4, the hypotenuse c is calculated as c = √(3² + 4²) = 5.",
  },
  {
    name: "Quadratic Formula",
    description: "Calculates the solutions of a quadratic equation.",
    formula: "x = (-b ± √(b² - 4ac)) / 2a",
    example:
      "For the quadratic equation ax² + bx + c = 0, with a = 1, b = -3, and c = 2, the solutions are x₁ = 2 and x₂ = 1.",
  },
  {
    name: "Area of a Circle",
    description: "Calculates the area of a circle.",
    formula: "A = πr²",
    example:
      "For a circle with a radius r = 5, the area A is calculated as A = π * 5² = 25π square units.",
  },
  {
    name: "Law of Sines",
    description: "Relates the sides and angles of any triangle.",
    formula: "sin(A)/a = sin(B)/b = sin(C)/c",
    example:
      "In a triangle with angles A, B, and C, and sides a, b, and c opposite to those angles, the law of sines relates them: sin(A)/a = sin(B)/b = sin(C)/c.",
  },
  {
    name: "Euler's Formula",
    description: "Relates complex exponentials and trigonometric functions.",
    formula: "e^(ix) = cos(x) + i*sin(x)",
    example:
      "Euler's formula relates complex exponential e^(ix) to trigonometric functions: e^(iπ) + 1 = 0.",
  },
  {
    name: "Sum of Arithmetic Series",
    description: "Calculates the sum of an arithmetic series.",
    formula: "S_n = (n/2) * (a_1 + a_n)",
    example:
      "The sum of the first n natural numbers is calculated using this formula: S_n = (n/2) * (1 + n).",
  },
  {
    name: "Binomial Theorem",
    description: "Expands powers of a binomial expression.",
    formula:
      "(a + b)^n = C(n,0)a^n + C(n,1)a^(n-1)b + ... + C(n,n-1)a*b^(n-1) + C(n,n)b^n",
    example:
      "Expanding (x + y)^4 using the binomial theorem results in x^4 + 4x³y + 6x²y² + 4xy³ + y^4.",
  },
];

export default data;
