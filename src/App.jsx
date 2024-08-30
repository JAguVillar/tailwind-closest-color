import { Label, TextInput, Button, Card } from "flowbite-react";
import { useState } from "react";
import colores from "./datasets/data.js";

const COLORES = colores;

export default function App() {
  const [newColor, setNewColor] = useState("");
  const [nearestColor, setNearestColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (e != "") {
      const rgb1 = hexToRgb(newColor);
      setNearestColor(findNearestColor(rgb1));
      setNewColor("");
    }
  }

  function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "");

    // Parse r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { r, g, b };
  }

  function colorDistance(color1, color2) {
    return Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
    );
  }

  function findNearestColor(targetHex) {
    // Convert targetHex to RGB
    // let targetRgb = hexToRgb(targetHex);
    let nearestColor = null;
    let minDistance = Infinity;

    COLORES.forEach((color) => {
      let distance = colorDistance(targetHex, {
        r: color.r,
        g: color.g,
        b: color.b,
      });

      if (distance < minDistance) {
        minDistance = distance;
        nearestColor = color;
      }
    });
    console.log(nearestColor);
    return nearestColor;
  }

  return (
    <>
      <form className="mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="colorInput">Codigo</Label>
          <div className="flex gap-2">
            <TextInput
              value={newColor}
              id="colorInput"
              type="text"
              placeholder="#000000"
              className="flex-grow"
              onChange={(e) => setNewColor(e.target.value)}
            />
            <Button color="dark" type="submit">
              Buscar
            </Button>
          </div>
        </div>
      </form>

      {nearestColor && (
        <Card className="w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            El color <span className="text-sky-500">tailwind</span> más cercano
            es:
          </h5>
          <div className="flex gap-10">
            <div
              className={`size-20 ${nearestColor.code} border-2 rounded-md`}
            ></div>
            <div>
              <ul>
                <li className="text-lg font-bold">{nearestColor.code}</li>
                <li className="text-gray-500 font-semibold uppercase">
                  {nearestColor.hex}
                </li>
                <li className="text-gray-500 font-semibold">
                  {nearestColor.rgb}
                </li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
