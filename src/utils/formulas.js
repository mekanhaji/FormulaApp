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
  {
    name: "Difference of Squares",
    description: "The difference of squares of two numbers.",
    formula: "a^2 - b^2 = (a - b)(a + b)",
    example: "For a = 5 and b = 3, 5^2 - 3^2 = (5 - 3)(5 + 3) = 2 * 8 = 16",
  },
  {
    name: "Square of Sum",
    description: "The square of the sum of two numbers.",
    formula: "(a + b)^2 = a^2 + 2ab + b^2",
    example: "For a = 2 and b = 3, (2 + 3)^2 = 5^2 = 25",
  },
  {
    name: "Sum of Squares",
    description: "The sum of squares of two numbers.",
    formula: "a^2 + b^2 = (a + b)^2 - 2ab",
    example:
      "For a = 4 and b = 1, 4^2 + 1^2 = (4 + 1)^2 - 2 * 4 * 1 = 25 - 8 = 17",
  },
  {
    name: "Cubic Expansion",
    description: "Expansion of (a + b)^3",
    formula: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
    example: "For a = 2 and b = 1, (2 + 1)^3 = 3^3 = 27",
  },
  {
    name: "Difference of Cubes",
    description: "The difference of cubes of two numbers.",
    formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
    example:
      "For a = 4 and b = 2, 4^3 - 2^3 = (4 - 2)(4^2 + 4*2 + 2^2) = 2 * 20 = 40",
  },
  {
    name: "Sum of Cubes",
    description: "The sum of cubes of two numbers.",
    formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
    example:
      "For a = 3 and b = 2, 3^3 + 2^3 = (3 + 2)(3^2 - 3*2 + 2^2) = 5 * 5 = 25",
  },
  {
    name: "Fourth Power Expansion",
    description: "Expansion of (a + b)^4",
    formula: "(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4",
    example: "For a = 2 and b = 1, (2 + 1)^4 = 3^4 = 81",
  },
  {
    name: "Fourth Power Difference",
    description: "The difference of fourth powers of two numbers.",
    formula: "a^4 - b^4 = (a - b)(a + b)(a^2 + b^2)",
    example:
      "For a = 3 and b = 2, 3^4 - 2^4 = (3 - 2)(3 + 2)(3^2 + 2^2) = 1 * 5 * 13 = 65",
  },
  {
    name: "Power Rule (Product)",
    description: "The product rule for exponents.",
    formula: "(a^m)(a^n) = a^(m + n)",
    example: "For a = 2, m = 3, and n = 4, (2^3)(2^4) = 2^(3 + 4) = 2^7 = 128",
  },
  {
    name: "Power Rule (Base)",
    description: "The rule for raising a power to another power.",
    formula: "(a^b)^m = a^(b * m)",
    example: "For a = 2, b = 3, and m = 4, (2^3)^4 = 2^(3 * 4) = 2^12 = 4096",
  },
  {
    name: "Square of Difference",
    description: "The square of the difference of two numbers.",
    formula: "(a - b)^2 = a^2 - 2ab + b^2",
    example: "For a = 5 and b = 3, (5 - 3)^2 = 5^2 - 2 * 5 * 3 + 3^2 = 4",
  },
  {
    name: "Square of Sum (Three Variables)",
    description: "The square of the sum of three numbers.",
    formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca",
    example: "For a = 2, b = 3, and c = 4, (2 + 3 + 4)^2 = 9^2 = 81",
  },
  {
    name: "Square of Difference (Three Variables)",
    description: "The square of the difference of three numbers.",
    formula: "(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca",
    example: "For a = 5, b = 3, and c = 2, (5 - 3 - 2)^2 = 0",
  },
  {
    name: "Cubic Expansion (Three Variables)",
    description: "Expansion of (a + b + c)^3",
    formula:
      "(a + b + c)^3 = a^3 + 3a^2b + 3ab^2 + b^3 + 3a^2c + 3ac^2 + 3b^2c + 3bc^2 + c^3",
    example: "For a = 2, b = 1, and c = 3, (2 + 1 + 3)^3 = 6^3 = 216",
  },
  {
    name: "Cubic Difference (Three Variables)",
    description: "The difference of cubes of three numbers.",
    formula: "a^3 - b^3 - c^3 = (a - b)(a^2 + ab + b^2) - c^3",
    example:
      "For a = 4, b = 2, and c = 1, 4^3 - 2^3 - 1^3 = (4 - 2)(4^2 + 4*2 + 2^2) - 1 = 40 - 1 = 39",
  },
  {
    name: "Perimeter of Rectangle",
    description:
      "The perimeter of a rectangle with length (l) and breadth (b).",
    formula: "Perimeter = 2(l + b)",
    example: "For l = 4 and b = 3, Perimeter = 2(4 + 3) = 14 units",
  },
  {
    name: "Area of Rectangle",
    description: "The area of a rectangle with length (l) and breadth (b).",
    formula: "Area = l × b",
    example: "For l = 5 and b = 2, Area = 5 × 2 = 10 square units",
  },
  {
    name: "Area of Square",
    description: "The area of a square with side length (a).",
    formula: "Area = a^2",
    example: "For a = 3, Area = 3^2 = 9 square units",
  },
  {
    name: "Perimeter of Square",
    description: "The perimeter of a square with side length (a).",
    formula: "Perimeter = 4a",
    example: "For a = 6, Perimeter = 4 × 6 = 24 units",
  },
  {
    name: "Area of Triangle",
    description: "The area of a triangle with base (b) and height (h).",
    formula: "Area = (1/2) × b × h",
    example: "For b = 8 and h = 6, Area = (1/2) × 8 × 6 = 24 square units",
  },
  {
    name: "Area of Circle",
    description: "The area of a circle with radius (r).",
    formula: "Area = π × r^2",
    example: "For r = 5, Area = π x 5^2 = 25π square units",
  },
  {
    name: "Circumference of Circle",
    description: "The circumference of a circle with radius (r).",
    formula: "Circumference = 2πr",
    example: "For r = 3, Circumference = 2π × 3 = 6π units",
  },
];

export default data;
