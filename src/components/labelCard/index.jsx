const LognCard = ({
    labelData,
    valueData,
    isIcon = true,
    isPayment = false,
    isLabel = false,
    approvalStatus,
    renderLabel,
    renderApprovalStatus,
    renderPaymentInfo,
  }) => {
    let declinedStyle = {
      background: "#ff000033",
      fontSize: "16px",
      fontWeight: "550",
      color: "red",
    };
    let pendingSyle = {
      background: "rgb(29 0 255 / 20%)",
      fontSize: "16px",
      fontWeight: "550",
      color: "#1976d2",
    };
  
    let approvedStyle = {
      background: "rgb(0 128 3 / 20%)",
      fontSize: "16px",
      fontWeight: "550",
      color: "green",
    };
  
    return (
      <div
        className="all-card"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "100%",
          margin: "10px 0px",
        }}
      >
        <div
          className="img-detail-div"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <div className="user-profile">
            <CardMedia
              className="user-profile-media"
              sx={{ height: "100%", width: "100%", m: 2 }}
              image={profile}
              title="profile"
            />
          </div>
          <CardContent className="long-card-content">
            {labelData?.map((labels) =>
              renderLabel ? (
                renderLabel(labels, valueData, isIcon, isLabel)
              ) : (
                <Typography
                  key={labels?.id}
                  className="inter"
                  style={{
                    color: "black",
                    fontSize: "clamp(12px, 2vw, 15px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {isIcon && (
                    <span style={{ fontSize: "12px" }}>{labels?.icon}</span>
                  )}{" "}
                  {isLabel && (
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#ff5700",
                        display: "inline-block",
                      }}
                    >
                      {labels?.label}:
                    </span>
                  )}{" "}
                  <span style={{ marginLeft: "3px" }}>
                    {labels?.id === "selectedSession"
                      ? `${valueData[labels?.id]} mins`
                      : labels?.id === "sessionPricing"
                      ? "500"
                      : labels?.id === "scheduledTime1"
                      ? valueData[labels?.id].split("T")[0]
                      : valueData[labels?.id] ??
                        valueData.serviceUser[labels?.id]}
                  </span>
                </Typography>
              )
            )}
          </CardContent>
        </div>
  
        <div className="all-btn-div">
          {renderApprovalStatus ? (
            renderApprovalStatus(approvalStatus, approvedStyle, pendingSyle, declinedStyle)
          ) : (
            approvalStatus !== null && (
              <Chip
                label={
                  approvalStatus === "Approved"
                    ? "Approved"
                    : approvalStatus === "Created"
                    ? "Pending"
                    : "Declined"
                }
                style={
                  approvalStatus === "Approved"
                    ? approvedStyle
                    : approvalStatus === "Created"
                    ? pendingSyle
                    : declinedStyle
                }
              />
            )
          )}
  
          {isPayment &&
            (renderPaymentInfo ? (
              renderPaymentInfo()
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span
                  className="inter"
                  style={{ fontSize: "10px", letterSpacing: "0.1em" }}
                >
                  Payment Done{" "}
                </span>
                <VerifiedUserIcon
                  sx={{ fontSize: "15px", color: "green", pl: 1 }}
                />
              </div>
            ))}
        </div>
  
        <div
          className="mobile-verify-indicator"
          style={{
            color:
              approvalStatus === "Approved"
                ? "green"
                : approvalStatus === "Created"
                ? "green.1"
                : "red",
          }}
        >
          {approvalStatus !== null && (
            <ArrowTooltips
              tiptext={
                approvalStatus === "Approved"
                  ? "Approved"
                  : approvalStatus === "Created"
                  ? "Pending"
                  : "Declined"
              }
            >
              <BookmarkAddedIcon sx={{ pr: 1, fontSize: "18px" }} />
            </ArrowTooltips>
          )}
        </div>
      </div>
    );
  };

  const ParentComponent = () => {
    const renderCustomLabel = (label, valueData, isIcon, isLabel) => (
      <Typography
        key={label.id}
        style={{ color: "blue", fontSize: "16px", fontWeight: "600" }}
      >
        {isIcon && <span>{label.icon}</span>}
        {isLabel && <strong>{label.label}:</strong>}
        <span>{valueData[label.id]}</span>
      </Typography>
    );
  
    const renderCustomApprovalStatus = (
      approvalStatus,
      approvedStyle,
      pendingSyle,
      declinedStyle
    ) => (
      <Chip
        label={
          approvalStatus === "Approved"
            ? "Approved"
            : approvalStatus === "Created"
            ? "Pending"
            : "Declined"
        }
        style={
          approvalStatus === "Approved"
            ? { ...approvedStyle, fontSize: "18px" }
            : approvalStatus === "Created"
            ? { ...pendingSyle, color: "darkblue" }
            : declinedStyle
        }
      />
    );
  
    return (
      <LognCard
        labelData={myLabelData}
        valueData={myValueData}
        approvalStatus="Approved"
        renderLabel={renderCustomLabel}
        renderApprovalStatus={renderCustomApprovalStatus}
      />
    );
  };
  