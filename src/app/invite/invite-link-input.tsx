'use client'

import { Link, Copy } from "lucide-react";
import { IconButton } from "../components/icon-button";
import { InputRoot, InputIcon, InputField } from "../components/input";

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className='size-5' />

        <InputField
          readOnly
          defaultValue={inviteLink} />
      </InputIcon>

      <IconButton className='-mr-2'>
        <Copy className="size-5" onClick={copyInviteLink} />
      </IconButton>
    </InputRoot>
  )
}