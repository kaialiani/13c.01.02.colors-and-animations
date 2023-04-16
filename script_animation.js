"use strict";

import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(
  ".header_graphics",
  { y: -50 },
  { duration: 1, delay: stagger(0.2), repeat: Infinity, direction: "alternate" }
);

animate(
  ".product_graphics",
  { rotate: -50 },
  { duration: 1, delay: stagger(0.4), repeat: Infinity, direction: "alternate" }
);
