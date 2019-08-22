import React from "react";
import { Text, View } from "react-native";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ApppointmentDetails from "./AppointmentDetails";
const Get_Doctor = gql`
  {
    getDoctorDetails(id: "033822a1-5c99-4421-93b1-bef91af89eea") {
      id
      qualification
      doctorName
      user {
        id
      }
    }
  }
`;
const GET_Branch = gql`
  {
    getBranch(id: "4a045f8c-dad6-4b05-8bd4-3aeb8f7df436") {
      branchName
      address
      email
    }
  }
`;
export default function AppointmentDetailsProvider() {
  const queryMultiple = () => {
    const res1 = useQuery(Get_Doctor);
    const res2 = useQuery(GET_Branch);
    return [res1, res2];
  };

  const [
    { loading: loading1, data: data1, error },
    { data: data2 }
  ] = queryMultiple();

  if (loading1) return <Text>Loading...</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;
  else {
    return (
      <View>
        <ApppointmentDetails
          address={data1.getdoctorDetails.doctorName}
          symptom="hyperTension"
        />
      </View>
    );
  }
}
