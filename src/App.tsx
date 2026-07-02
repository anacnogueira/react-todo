import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";

export default function App() {
  
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-3">
        <Text as="div" variant="body-sm-bold" className="text-pink-base">Olá mundo!</Text>
        <Text as="div" className="text-green-base">Olá mundo!</Text>
        <Text as="div" variant="body-md-bold">Olá mundo!</Text>
        <Text>Levar o dog pra passear</Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

       <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

       <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>

       <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
      </div>

       <div>
        <Card size="md">Olá mundo</Card>
      </div>

    </div>
  )
}

