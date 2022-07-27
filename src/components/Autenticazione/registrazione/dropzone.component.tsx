import { Group, Text, useMantineTheme, MantineTheme } from "@mantine/core";
import { Upload, Photo, X, Icon as TablerIcon,  } from "tabler-icons-react";
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Component, ReactNode } from "react";
import React from "react";

type Props = {};
type State = {};

export default class DropZone extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

  //  this.getIconColor = this.getIconColor.bind(this);
  //   this.ImageUploadIcon = this.ImageUploadIcon.bind(this);
  //   this.dropzoneChildren = this.dropzoneChildren.bind(this);
  }

  // getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  //   return status.accepted
  //     ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]
  //     : status.rejected
  //     ? theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
  //     : theme.colorScheme === "dark"
  //     ? theme.colors.dark[0]
  //     : theme.colors.gray[7];
  // }

  // ImageUploadIcon({
  //   status,
  //   ...props
  // }: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  //   if (status.accepted) {
  //     return <Upload {...props} />;
  //   }

  //   if (status.rejected) {
  //     return <X {...props} />;
  //   }

  //   return <Photo {...props} />;
  // }

  // dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
  //   <Group
  //     position="center"
  //     spacing="xl"
  //     style={{ minHeight: 220, pointerEvents: "none" }}
  //   >
  //     <this.ImageUploadIcon
  //       status={status}
  //       style={{ color: this.getIconColor(status, theme) }}
  //       size={80}
  //     />

  //     <div>
  //       <Text size="xl" inline align="center">
  //         Trascina qui il tuo file o clicca per caricare il documento fronte -
  //         retro
  //       </Text>
  //       <Text size="sm" color="dimmed" inline mt={7} align="center">
  //         Formati supportati: JPEG, PNG, PDF, JFIF, HEIF
  //       </Text>
  //     </div>
  //   </Group>
  // );

  render(): ReactNode {
    const theme = useMantineTheme();
    return (
      // <Dropzone
      //   onDrop={(files) => console.log("accepted files", files)}
      //   onReject={(files) => console.log("rejected files", files)}
      //   maxSize={3 * 1024 ** 2}
      //   accept={[MIME_TYPES.jpeg, MIME_TYPES.pdf, MIME_TYPES.png]}
      // >
      //   {//(status) => this.dropzoneChildren(status, theme())
      //   }
      // </Dropzone>

      <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      >
      <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            size={50}
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
      </Dropzone>
    );
  }
}
