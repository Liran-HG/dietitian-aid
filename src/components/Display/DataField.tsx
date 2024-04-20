
type Props = {
  name: string;
  value: string | null;
  multiline?:boolean;
};

export function DataField(props: Props) {
  let displayVal = props.multiline ? <div dangerouslySetInnerHTML={{ __html:props.value ? props.value.replaceAll("\\n", "</br>") : ""}}></div> : props.value

  if(props.value == null || props.value == "") {
    displayVal = "נתון חסר"
  }

  return (
    <div className="flex gap-1">
      <p className="font-semibold">{props.name}: </p> {displayVal}
    </div>
  );
}
