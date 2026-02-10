import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
  let internalSecret = "my_secret_value";

  // Function to authenticate the secret token
  public shared ({ caller }) func authenticateSecretToken(attempt : ?Text) : async () {
    if (attempt != ?internalSecret) {
      Runtime.trap("Invalid secret. Access denied.");
    };
  };
};
