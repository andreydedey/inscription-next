import { ArrowRight, Copy, Mail } from "lucide-react";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { InputField, InputIcon, InputRoot } from "./components/input";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-semibold">Hello World</h1>
      <Button type="submit">
        Enviar
        <ArrowRight></ArrowRight>
      </Button>

      <IconButton>
        <Copy></Copy>
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>  
          <InputField />
        </InputRoot>
      </div>

    </main>
  );
}
