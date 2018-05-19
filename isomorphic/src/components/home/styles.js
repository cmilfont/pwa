export default theme => {
  const dragIndicatorSize = 32;
  const dragLineSize = 2;

  const panesCommon = {
    content: '""',
    position: 'absolute',
    width: dragIndicatorSize,
    height: dragIndicatorSize,
  };

  const panesBefore = {
    ...panesCommon,
    height: dragLineSize * 3,
    backgroundColor: theme.palette.grey[50],
  };
  
  const panesAfter = {
    ...panesCommon,
    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABiElEQVR4Ae3ZgYYCYRQF4AVi9QhVMECJuefNtl6h9AS79QhJz1ADQFX7HFtUrMVWdxdYMv+PvVz/cL4DcBCYuZ15ov8iIiIiIqJeA31Z4fSbJQbdpr3vqFPHXO7Qv8gd807d3neR1bCBlmST1ex9BzKBlkcm1r4DyeQW/EE3yQx9H/kIGk4+MvR9YAcNR/aGvg98QSP5NPR94AKN5GLo+5A9NBx5N/R9YAyNZGzo+8jbscciWoZ+Ai+yqb3vckrIvvyRmNXsfadjThaPx5ksOnVD31+3iYEUOOIoRfg8jvT9ERERcRfiLsRdiLsQdyHuQtyFuAtxF+IuxF2IuxAREXEXyl+kwAEHWaHfa1RsF5KZ3B7+ns/wXJldSNalx9m6IrsQXqGBvFVgF0ILV2gg33k7+V1IhtBwZJj+LrSBRrJNfxc6QSM5pb8LnaGRnJPfhbCFRrIz7EKpjbv2Xcj/MXq170LVepFNE/vElNwuZDjOUtuFAudxgQ8csMSg1+AuREREREREXn4A0o+voNRuPgAAAAAASUVORK5CYII=)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: '.05',
    transform: 'rotate(90deg)',
  };

  return ({
    resizer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      border: `${dragLineSize}px solid rgba(0, 0, 0, .05)`,
      zIndex: '1',
      boxSizing: 'border-box',
      backgroundClip: 'padding-box',
      '&:hover': {
        transition: 'all 1s ease',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        '&::after': {
          opacity: '.5',
        },
      },
      '&.horizontal': {
        cursor: 'row-resize',
        marginBottom: '8px',
      },
      '&.vertical': {
        cursor: 'col-resize',
        marginRight: '8px',
        width: '0px',
        '&::after': {
          transform: 'rotate(0deg)',
        },
        '&::before': {
          height: dragIndicatorSize,
          width: dragLineSize * 2,
        },
      },
      '&::after': {
        ...panesAfter,
      },
      '&::before': {
        ...panesBefore,
      },
    },
    pane: {
      overflow: 'auto',
      overflowX: 'hidden',
    },
  });
};