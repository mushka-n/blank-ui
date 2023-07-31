import React from 'react';

type ParsedInputChildren = {
  Label: any;
  Hint: any;
  AddonLead: any;
  InlineAddonLead: any;
  Input: any;
  InlineAddonTrail: any;
  AddonTrail: any;
  Info: any;
};

const useParseInputChildren = (children: React.ReactNode) => {
  const res: ParsedInputChildren = {
    Label: null,
    Hint: null,
    AddonLead: null,
    InlineAddonLead: null,
    Input: null,
    InlineAddonTrail: null,
    AddonTrail: null,
    Info: null,
  };

  if (!children) return res;
  React.Children.toArray(children).forEach((child: React.ReactNode) => {
    if (!child) return;
    const name = (child as any).type?.name;

    if (name === 'Label') res.Label = child;
    else if (name === 'Hint') res.Hint = child;
    else if (name === 'Info') res.Info = child;
    else if (name === 'Input') res.Input = child;
    else if (name === 'Addon') {
      if (!res.Input) res.AddonLead = child;
      else res.AddonTrail = child;
    } else if (name === 'InlineAddon') {
      if (!res.Input) res.InlineAddonLead = child;
      else res.InlineAddonTrail = child;
    }
  });

  if (res.AddonLead)
    res.AddonLead = React.cloneElement(res.AddonLead, {
      position: 'left',
    });
  if (res.AddonTrail)
    res.AddonTrail = React.cloneElement(res.AddonTrail, {
      position: 'right',
    });

  return res;
};

export default useParseInputChildren;
