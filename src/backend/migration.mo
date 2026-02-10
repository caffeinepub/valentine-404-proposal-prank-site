module {
  type OldActor = {
    serverPasscode : Text;
  };

  type NewActor = {
    internalSecret : Text;
  };

  public func run(old : OldActor) : NewActor {
    { internalSecret = old.serverPasscode };
  };
};
